// Main class for all common shape attributes
class Shape {
  constructor() {
    this.color;
    this.text;
    this.textColor
  }
  setColor(color) {
    return this.color = color;
  }
  setText(text) {
    return this.text = text;
  }
  setTextColor(textColor) {
    return this.textColor = textColor;
  }
}

// Individual shapes extending main class
class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  // Use render() method on each shape class so that we can test the return value easily
  render() {
    return `<circle cx="100" cy="100" r="100" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<rect x="10" y="10" width="200" height="200" fill="${this.color}"/>`;
  
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<polygon points="100, 15 200, 200 0, 200" fill="${this.color}"/>`;
  
  }
}

module.exports = { Circle, Square, Triangle };;