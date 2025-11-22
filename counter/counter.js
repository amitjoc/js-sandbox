const counter = {
  _internalCount: 0,

  get currentCounter() {
    return this._internalCount;
  },
  set updateCounter(newCount) {
    if (newCount >= 0 && newCount >= this._internalCount) {
      this._internalCount = newCount;
    } else {
      throw new Error(
        "ERROR: Invalid count value. Count must be non-negative and greater than or equal to the current count:" +
          this._internalCount
      );
    }
  },

  increment: function () {
    this._internalCount += 1;
    return this._internalCount;
  },

  incrementBy: function (value) {
    if (value > 1 && Number.isInteger(value)) {
      this._internalCount += value;
      return this._internalCount;
    } else {
      throw new Error(
        "ERROR: Invalid increment value. Value must be an integer greater than 1."
      );
    }
  },

  decrement: function () {
    if (this._internalCount > 0) {
      this._internalCount -= 1;
      return this._internalCount;
    } else {
      throw new Error("ERROR: Counter cannot be decremented below zero.");
    }
  },
  resetCounter: function () {
    this._internalCount = 0;
    return this._internalCount;
  },
};
