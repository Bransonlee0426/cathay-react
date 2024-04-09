import './QuestionsPage.scss';
import Question from '../Question/Question';
import React from 'react';
export default function QuestionsPage() {
  const questionArr = [
    {
      question: `1. There is an array 
      {
        firstName: 'xxx',
        lastName: 'xxx',
        customerID: 'xxx',
        note: 'xxx',
        profession: 'xxx',
      }
      each item has such format: cobjText lastName, note can be empty, customerID can only be a set of digital numbers. profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or ‘systemAnalytics’.`,
      subQuestion: [
        {
          title: `
/**
Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.
**/
          `,
          answer: `
          function sortUserName(users) {
            function compareValues(a, b) {
              if (a < b) return -1;
              if (a > b) return 1;
              return 0;
            }
            return users.sort((a, b) => {
              const firstNameComparison = compareValues(a.firstName, b.firstName);
              if (firstNameComparison !== 0) return firstNameComparison;
    
              const lastNameComparison = compareValues(a.lastName || '', b.lastName || '');
              if (lastNameComparison !== 0) return lastNameComparison;
    
              return compareValues(a.customerID, b.customerID);
            });
            });
          }
          `,
        },
        {
          title: `
/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.
**/
          `,
          answer: `
          function sortByType(users) {
            const professionOrder = {
              systemAnalytics: 1,
              engineer: 2,
              productOwner: 3,
              freelancer: 4,
              student: 5,
            };
            function compareValues(a, b) {
              if (a < b) return -1;
              if (a > b) return 1;
              return 0;
            }
            return users.sort((a, b) => {
              return compareValues(professionOrder[a.profession], professionOrder[b.profession]);
            });
          }
          `,
        },
      ],
    },
    {
      question: `
      2. HTML
      <div class="container">
      <div class="header">5/8 外出確認表</div>
      <div class="content">
      <ol class="shop-list">
      <li class="item">麵包</li>
      <li class="item">短袖衣服</li>
      <li class="item">飲用水</li>
      <li class="item">帳篷</li>
      </ol>
      <ul class="shop-list">
      <li class="item">暈車藥</li>
      <li class="item">感冒藥</li>
      <li class="item">丹木斯</li>
      <li class="item">咳嗽糖漿</li>
      </ul>
      </div>
      <div class="footer">以上僅共參考</div>
      </div>
      `,
      subQuestion: [
        {
          title: `
/*
.container .shop-list .item {
  /* Explain why does this color not works, and how to fix make it work on 1st list */
  color: blue;
}
*/
          `,
          answer: `
          .container .shop-list:first-child .item {
            color: blue;
          }

          Reason: 
          1. .container .shop-list li.item
          2. .container .shop-list .item
          The specificity of 1 is higher than 2 because 1 has three class selectors plus one element selector, 
          while 2 only has three class selectors. If you want 2 to have a higher specificity than 1, 
          you just need to add a tag to 2 that has a higher specificity than an element selector.
          `,
        },
        {
          title: `
/* Write styling make every other line give background color to next one */
          `,
          answer: `
          li:nth-child(2n) {
            background-color: #f2f2f2;
          }
          `,
        },
      ],
    },
    {
      question: `
      3. let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1,
        3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
        Please write down a function to console log unique value from this array.
      `,
      subQuestion: [
        {
          title: '',
          answer: `
          function getUniqueNumber(items) {
            const uniqueValues = [...new Set(items)];
          }
          `,
        },
      ],
    },
    {
      question: `
      4. Can you explain about Interface and Enum, and where will you be using,
      please make some examples.
      `,
      subQuestion: [
        {
          title: '',
          answer: `
          1.Interface:A way to define contracts (structures or types). 
          Interfaces can be used to describe the structure of objects, classes, and functions.
          
          Ex:
          interface Person {
            name: string;
            age: number;
          }
          
          function greet(person: Person) {
            return "Hello, " + person.name;
          }
          
          let user = { name: "Alice", age: 23 };
          console.log(greet(user)); // 輸出 "Hello, Alice"

          --------------------------------------------------------------------------------------
          
          2.Enum:A special kind of class that contains a set of named constants. 
          It can make your code easier to read and understand, 
          and can prevent errors when dealing with specific sets of values.
          
          Ex:
          enum Day {
            Sunday,
            Monday,
            Tuesday,
            Wednesday,
            Thursday,
            Friday,
            Saturday,
          }
          
          function getDay(day: Day): string {
            if (day === Day.Sunday) {
              return "今天是星期天!";
            } else {
              return "今天不是星期天。";
            }
          }
          
          console.log(getDay(Day.Monday)); // 輸出 "今天不是星期天。"
          console.log(getDay(Day.Sunday)); // 輸出 "今天是星期天!"
          `,
        },
      ],
    },
    {
      question: `
      5. Can you explain the problem with the following code, 
      and how to fix it.
      `,
      subQuestion: [
        {
          title: `   
    /**
      class Count extends React.Component {
        constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.handleAddCount = this.handleAddCount.bind(this);
        }
        handleAddCount(){
        this.setState({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 1 });
        }
        render() {
        return (
        <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
        </div>
        );
        }
        }
        ReactDOM.render(
        <Count />,
        document.getElementById('root')
        );
    **/
          `,
          answer: `
          setState is asynchronous. 
          When setState is called consecutively within an event handler or lifecycle method, 
          it doesn't immediately update the state. 
          Instead, it enqueues the updates and applies them all at a later point in time.
          This issue can be resolved by using the function form of setState.

          Solution:
          handleAddCount() {
            this.setState(prevState => ({ count: prevState.count + 1 }));
            this.setState(prevState => ({ count: prevState.count + 1 }));
            this.setState(prevState => ({ count: prevState.count + 1 }));
          }

          or

          handleAddCount() {
            this.setState({ count: this.state.count + 3 });
          }
          `,
        },
      ],
    },
    {
      question: '6. Please write the sample code to debounce handleOnChange',
      subQuestion: [
        {
          title: `
/**
var SearchBox = React.createClass({
render: function() {
return <input type="search" name="p" onChange={this.handleOnChange}
/>;
},
handleOnChange: function(event) {
// make ajax call
}
});
**/
          `,
          answer: `
          var SearchBox = createClass({
            render: function () {
              return <input type="search" name="p" onChange={this.handleOnChange} />;
            },
          
            getInitialState: function () {
              return {
                inputValue: '',
              };
            },
            timeoutId: null, // debounce
          
            handleOnChange: function (event) {
              //when first time input value is null
              if (this.timeoutId !== null) {
                clearTimeout(this.timeoutId);
              }
          
              const newValue = event.target.value;
          
              this.timeoutId = setTimeout(() => {
                this.setState({ inputValue: newValue });
                // make ajax call
              }, 300);
            },
          });
          
          `,
        },
      ],
    },
    {
      question: '',
      subQuestion: [
        {
          title: '',
          answer: '',
        },
      ],
    },
  ];

  return (
    <div>
      {questionArr.map((item, index) => (
        <Question key={index} data={item} />
      ))}
    </div>
  );
}
