```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic for conditional rendering and side effects
    if (count > 0) {
      // Perform side effect based on count
       console.log('Count is greater than 0. Perform side effect.');
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```