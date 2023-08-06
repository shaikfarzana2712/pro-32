class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter the option no");
   


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
     this.Question = createElement('h3')
     this.option1 = createElement('h4')
     this.option2 = createElement('h4')
     this.option3 = createElement('h4')
     this.option4 = createElement('h4')




    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.Question.html("Who is the prime minister of india")
    this.Question.position(150,80)

    this.option1.html("nehru")
    this.option1.position(150,100)

    this.option2.html("ambedkar")
    this.option2.position(150,120)

    this.option3.html("modi")
    this.option3.position(150,140)
 
    this.option4.html("none")
    this.option4.position(150,160)



    this.input1.position(150, 230);
    this.input2.position(350,230);
    this.button.position(290, 300);


    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
   this.message.html("ans submitted")
   this.message.position(350,350)

    })


  }
}
