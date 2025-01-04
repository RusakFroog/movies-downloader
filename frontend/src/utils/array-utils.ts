declare global {
    interface Array<T> {
        getRandomItem(): T | undefined;
    }  
}

Array.prototype.getRandomItem = function() {
    return this[Math.floor(Math.random() * this.length)];
};

export {};