import ArrayBox from "./component/array/ArrayBox";
import EditBox from "./component/array/EditBox";
import Arrow from "./component/basic/Arrow";

function App() {

  const a = [1, 2, 3, 4, 5]

  return (
    <div className="App">
      {
        a.map((e, i) => {
          return (
            <>
              <ArrayBox
                content={e}
                down={i}
              />
              {
                (i!==a.length-1)&&<Arrow dir={0}/>
              }
              
            </>
          )
        })
      }
      <EditBox/>

    </div>
  );
}

export default App;
