const db = {
    'user': [
        {
            id: 1,
            name: 'Jhurgen'
        }
    ]
}

const list = (table) => {
    return db[table]
}
const get = (table, id) => {
    let colle = list(table)
    return colle.filter( item => item.id === id[0] || null);
}
const upsert = (collection, data) => {
    db[collection].push(data)
}
const remove = (table, id) => {
    return true
}

module.exports = {
    list,
    get,
    upsert,
    remove
}