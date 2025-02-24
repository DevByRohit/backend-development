const calculate = (num1, num2, operator, res) => {
  let result;
  switch (operator) {
    case "Add":
      result = num1 + num2;
      res.write(`<!DOCTYPE html>
                <html lang="en">
                    <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Result Page</title>
                    <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    h1 {
                        text-align: center;
                        padding: 15px;
                        margin: 10px;
                        background-color: hsl(62, 100%, 69%);
                        border: 1px solid black;
                        border-radius: 10px;
                        text-transform: uppercase;
                        box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
                    }

                    .result {
                        text-align: center;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        border: 1px solid black;
                        border-radius: 10px;
                        background-color: #c3ff9e;
                        font-family: monospace;
                        padding: 35px 50px;
                        box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
                    }
                    h2 {
                        font-size: 24px;
                        font-weight: 600;
                        text-align: center;
                        margin: 10px 0px;
                    }
                    p {
                        margin: 10px 0px;
                        font-size: 16px;
                    }
                    </style>
                </head>
                <body>
                    <h1>Welcome To Result Page</h1>
                    <div class="result">
                    <p>The Numbers You Have Entered ${num1}, ${num2}</p>
                    <h2>The Addition Is ${result}</h2>
                    </div>
                </body>
                </html>
            `);
      break;
    case "Subtract":
      result = num1 - num2;
      res.write(`<!DOCTYPE html>
        <html lang="en">
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Result Page</title>
            <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            h1 {
                text-align: center;
                padding: 15px;
                margin: 10px;
                background-color: hsl(62, 100%, 69%);
                border: 1px solid black;
                border-radius: 10px;
                text-transform: uppercase;
                box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
            }

            .result {
                text-align: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border: 1px solid black;
                border-radius: 10px;
                background-color: #c3ff9e;
                font-family: monospace;
                padding: 35px 50px;
                box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
            }
            h2 {
                font-size: 24px;
                font-weight: 600;
                text-align: center;
                margin: 10px 0px;
            }
            p {
                margin: 10px 0px;
                font-size: 16px;
            }
            </style>
        </head>
        <body>
            <h1>Welcome To Result Page</h1>
            <div class="result">
            <p>The Numbers You Have Entered ${num1}, ${num2}</p>
            <h2>The Subtraction Is ${result}</h2>
            </div>
        </body>
        </html>
    `);
      break;
    case "Multiply":
      result = num1 * num2;
      res.write(`<!DOCTYPE html>
        <html lang="en">
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Result Page</title>
            <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            h1 {
                text-align: center;
                padding: 15px;
                margin: 10px;
                background-color: hsl(62, 100%, 69%);
                border: 1px solid black;
                border-radius: 10px;
                text-transform: uppercase;
                box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
            }

            .result {
                text-align: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border: 1px solid black;
                border-radius: 10px;
                background-color: #c3ff9e;
                font-family: monospace;
                padding: 35px 50px;
                box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
            }
            h2 {
                font-size: 24px;
                font-weight: 600;
                text-align: center;
                margin: 10px 0px;
            }
            p {
                margin: 10px 0px;
                font-size: 16px;
            }
            </style>
        </head>
        <body>
            <h1>Welcome To Result Page</h1>
            <div class="result">
            <p>The Numbers You Have Entered ${num1}, ${num2}</p>
            <h2>The Multiplication Is ${result}</h2>
            </div>
        </body>
        </html>
    `);
      break;
    case "Divide":
      result = num1 / num2;
      res.write(`<!DOCTYPE html>
        <html lang="en">
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Result Page</title>
            <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            h1 {
                text-align: center;
                padding: 15px;
                margin: 10px;
                background-color: hsl(62, 100%, 69%);
                border: 1px solid black;
                border-radius: 10px;
                text-transform: uppercase;
                box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
            }

            .result {
                text-align: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border: 1px solid black;
                border-radius: 10px;
                background-color: #c3ff9e;
                font-family: monospace;
                padding: 35px 50px;
                box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
            }
            h2 {
                font-size: 24px;
                font-weight: 600;
                text-align: center;
                margin: 10px 0px;
            }
            p {
                margin: 10px 0px;
                font-size: 16px;
            }
            </style>
        </head>
        <body>
            <h1>Welcome To Result Page</h1>
            <div class="result">
            <p>The Numbers You Have Entered ${num1}, ${num2}</p>
            <h2>The Division Is ${result}</h2></h2>
            </div>
        </body>
        </html>
    `);
      break;
    case "None":
      result = "Invalid Operator";
      res.write(`<!DOCTYPE html>
            <html lang="en">
                <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Result Page</title>
                <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                h1 {
                    text-align: center;
                    padding: 15px;
                    margin: 10px;
                    background-color: hsl(62, 100%, 69%);
                    border: 1px solid black;
                    border-radius: 10px;
                    text-transform: uppercase;
                    box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
                }
    
                .result {
                    text-align: center;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border: 1px solid black;
                    border-radius: 10px;
                    background-color: #c3ff9e;
                    font-family: monospace;
                    padding: 35px 50px;
                    box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
                }
                h2 {
                    font-size: 24px;
                    font-weight: 600;
                    text-align: center;
                    margin: 10px 0px;
                }
                p {
                    margin: 10px 0px;
                    font-size: 16px;
                }
                </style>
            </head>
            <body>
                <h1>Welcome To Result Page</h1>
                <div class="result">
                <p>You Have Not Entered Any Numbers ${num1}, ${num2}</p>
                <h2>The Result Is Invalid Because Of ${result}</h2></h2>
                </div>
            </body>
            </html>
        `);
      break;
    default:
      result = "Invalid Operator";
  }
  return res.end();
};

exports.calculate = calculate;
