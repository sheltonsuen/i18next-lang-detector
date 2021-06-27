export const isLocalStorageAvailable = (): boolean => {
    if (!window?.localStorage) {
        return false
    }

    try {
        window.localStorage.setItem('foo.bar', 'foo')
        window.localStorage.removeItem('foo.bar')
    } catch (e) {
        return false
    }
    return true
}
