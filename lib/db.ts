import { openDB, DBSchema } from 'idb';

interface InventoryDB extends DBSchema {
'offline-scans': {
key: string;
value: {
id: string;
barcode: string;
quantity: number;
action: 'add' | 'remove';
timestamp: number;
synced: boolean;
};
};
}

export async function initDB() {
return openDB<InventoryDB>('aijen-inventory-db', 1, {
upgrade(db) {
if (!db.objectStoreNames.contains('offline-scans')) {
db.createObjectStore('offline-scans', { keyPath: 'id' });
}
},
});
}

export async function saveOfflineScan(scan: InventoryDB['offline-scans']['value']) {
const db = await initDB();
await db.put('offline-scans', scan);
}

export async function getUnsyncedScans() {
const db = await initDB();
const allScans = await db.getAll('offline-scans');
return allScans.filter(scan => !scan.synced);
}

export async function markAsSynced(id: string) {
const db = await initDB();
const scan = await db.get('offline-scans', id);
if (scan) {
scan.synced = true;
await db.put('offline-scans', scan);
}
}