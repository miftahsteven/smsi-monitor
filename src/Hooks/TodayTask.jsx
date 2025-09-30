import { useEffect, useState, useCallback, useRef } from 'react';
import {

    getDatabase,
    ref,
    onValue,
    push,
    update,
    remove,
    query,
    orderByChild
} from 'firebase/database';
import { db } from '../firebase';

/**
 * Optional: If you already initialized firebase elsewhere and exported db, you can:
 * import { db } from '../firebase';
 * and replace getDatabase() calls with the imported db instance.
 */

const TODAY_TASK_PATH = '/TodayTask';

function mapSnapshot(snapshot) {
    const val = snapshot.val();
    if (!val) return [];
    return Object.entries(val).map(([id, data]) => ({
        id,
        ...data
    }));
}

/**
 * useTodayTask
 * Realtime subscribe to /TodayTask
 * Returns: { tasks, loading, error, addTask, updateTask, removeTask, resetTaskStatus }
 */
export function useTodayTask(options = {}) {
    const {
        // orderBy can be a child key (e.g., 'createdAt') if you store it
        orderBy = null
    } = options;

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isMountedRef = useRef(true);

    useEffect(() => {
        isMountedRef.current = true;
        //const db = getDatabase();
        const baseRef = ref(db, TODAY_TASK_PATH);
        const q = orderBy ? query(baseRef, orderByChild(orderBy)) : baseRef;

        const unsubscribe = onValue(
            q,
            (snapshot) => {
                if (!isMountedRef.current) return;
                setTasks(mapSnapshot(snapshot));
                setLoading(false);
            },
            (err) => {
                if (!isMountedRef.current) return;
                setError(err);
                setLoading(false);
            }
        );

        return () => {
            isMountedRef.current = false;
            unsubscribe();
        };
    }, [orderBy]);

    const addTask = useCallback(async (data) => {
        // data: { title, description, status, ... }
        const db = getDatabase();
        const listRef = ref(db, TODAY_TASK_PATH);
        const now = Date.now();
        const payload = {
            title: '',
            description: '',
            status: 'pending',
            createdAt: now,
            updatedAt: now,
            ...data
        };
        const newRef = await push(listRef, payload);
        return { id: newRef.key, ...payload };
    }, []);

    const updateTask = useCallback(async (id, partial) => {
        if (!id) throw new Error('updateTask: id is required');
        const db = getDatabase();
        const taskRef = ref(db, `${TODAY_TASK_PATH}/${id}`);
        const payload = { ...partial, updatedAt: Date.now() };
        await update(taskRef, payload);
        return { id, ...payload };
    }, []);

    const removeTask = useCallback(async (id) => {
        if (!id) throw new Error('removeTask: id is required');
        const db = getDatabase();
        const taskRef = ref(db, `${TODAY_TASK_PATH}/${id}`);
        await remove(taskRef);
        return id;
    }, []);

    const resetTaskStatus = useCallback(async (id) => {
        return updateTask(id, { status: 'pending' });
    }, [updateTask]);

    return {
        tasks,
        loading,
        error,
        addTask,
        updateTask,
        removeTask,
        resetTaskStatus
    };
}

export default useTodayTask;