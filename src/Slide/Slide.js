import React, {useState} from 'react';
import './Slide.css';


const Slide = () => { 

  let names = ['cSharp-logo.png', 'Vs-logo1.png', 'sql-logo.png', 'dotNet-logo.png', 'html-logo.png', 'react-logo.png'];

  const [current, setCurrent] = useState(0);

  const goToNext = () => {
    setCurrent(current === names.length - 1 ? 0 : current + 1);
  }

  React.useEffect(() => {
    setTimeout(goToNext, 3000)
  })

  if (!Array.isArray(names) || names.length <= 0) {
    return null;
  }
    return (
      <section className="slider">
        {names.map((name, index) => ( 
          <div className={index === current ? "slide_active" : "slide"}>
            <img className="image" src={require(`../Images/${name}`)} alt="" />
          </div>
        ))}
      </section>
    );

}

export default Slide;

