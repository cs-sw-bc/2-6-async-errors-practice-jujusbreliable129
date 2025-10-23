# 🍕 Assignment: The Pizza Promise

---

## 🧠 Scenario

You’ve been hired to build a small program for a pizza shop’s online order system.
The pizza shop wants two features:

1. If a customer enters no name or order, it should show a **custom error message** (using `try...catch` + `throw`).
2. If the order is valid, simulate the pizza-making process using a **Promise** — it should either:

   * ✅ Resolve with `"Pizza ready 🍕 for [customer name]!"`
   * ❌ Reject with `"Oven broke down! 🔥 Please come back later."`

---

## 🪄 Requirements

1. Use `try...catch` and `throw new Error()` to check if:

   * The `customerName` is empty
   * The `order` is empty

2. Use a Promise to simulate pizza preparation:

   * Use `setTimeout()` to add a **2-second delay** (representing baking time)
   * Use a random boolean (`Math.random() > 0.5`) to decide success or failure

3. Handle the Promise using **either**:

   * `.then()` and `.catch()`
   * **or** `async` / `await` inside a `try...catch` (student’s choice)

---

## 🧑‍💻 Optional Challenge: Build a UI

If you want an extra challenge — build a simple web page where:

* The user can enter their **name** in an input box.
* Choose a pizza type from a dropdown (e.g., Margherita, Veggie, Pepperoni).
* Click a **“Prepare Pizza”** button to start the process.
* Display the results (success or failure) directly on the page using DOM methods instead of console logs.

💡 Keep the same logic from your Promise code — just connect it to button clicks and user input!

---


## ✅ Example Outputs

### Success

```
👨‍🍳 Taking order for Alex...
⏳ Baking your Margherita pizza...
✅ Pizza ready 🍕 for Alex!
```

### Failure (random reject)

```
👨‍🍳 Taking order for Alex...
⏳ Baking your Margherita pizza...
❌ Oven broke down! 🔥 Please come back later.
```

### Validation Error

```
⚠️ Error: Customer name or order cannot be empty!
```
