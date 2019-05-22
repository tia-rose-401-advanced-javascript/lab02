'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }
  /**
   * // Removes the first item from a list and return the remaining array
   * 
   */
  shift(){
    let returnValue = this.data[this.length];
    delete this.data[0];
    this.length--;
    return returnValue;
  }
  /**
   * // Adds elements to the begining of the array and returns the length
   * 
   */

  unshift(item){
    let returnValue = this.data[this.length];
    for(let i = this.length; i > 0; i--){
      this.data[i] = this.data[i-1];
    }
    this.data[0] = item;
    this.length++;
    return returnValue;
  }
  /**
   * // Returns each element in the array
   * 
   */
  forEach(){
    for(let i = 0; i < this.length; i++){
      this.data[i];
    }
  }

}

module.exports = List;
