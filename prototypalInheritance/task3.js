//У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

//Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    stomach: [], // Add personal stomach for each hamster
    __proto__: hamster
  };
  
  let lazy = {
    stomach: [],  // Add personal stomach for each hamster
    __proto__: hamster
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
  console.log( lazy.stomach ); // apple
