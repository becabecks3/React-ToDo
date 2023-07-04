import './main.css'
import List from "../List/List";



const Main = () => {

  return <main>
        <h1 className="to-do">Keep track of your day</h1>
          <section>
            <List />
          </section>
      </main>
  ;
};

export default Main;