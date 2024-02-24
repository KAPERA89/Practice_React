import React, { useCallback, useMemo, useState } from 'react'

const Test4 = () => {

    const [count, setCount] = useState(0)

    const squaredValue = useMemo(() => {
        return count ** 2;
      }, [count]);
    
      return (
        <div>
          <p>Count: {count}</p>
          <p>Squared Value: {squaredValue}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
}

export default Test4