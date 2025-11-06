function preparePizza() {
  let name = document.getElementById("customerName").value;
  let pizza = document.getElementById("pizzaType").value;
  document.getElementById("result").innerText = "";

  try {
    if (name === "") {
      throw new Error("Error founded: No name.");
    } else if (pizza === "") {
      throw new Error("No pizza type founded.");
    }
  } catch (error) {
    console.log("Error founded!", error.message);
    document.getElementById("result").innerText = error.message;
    return;
  }

    console.log(`👨‍🍳 Taking order for ${name}...`);
  console.log(`⏳ Baking your ${pizza} pizza...`);

  let pizzaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let time = Math.random();
      if (time > 0.5) {
        resolve("Your Pizza is ready!");
      } else {
        reject("Pizza is not done");
      }
    }, 2000);
  });

      pizzaPromise.then((message) => {
      console.log(message);
      document.getElementById("result").innerText = message;
    });

    pizzaPromise.catch((message) => {
      console.log(message);
      document.getElementById("result").innerText = message;
    });
}

