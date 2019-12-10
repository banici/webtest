import React, {useState} from 'react';
import './Slide.css';


const Slide = () => { 

  let names = ['ladda-neda.jpg', 'ladda-nedaa.jpg', 'ladda-nedd.jpg', 'ladda-neddd.jpg'];

  const [current, setCurrent] = useState(0);

  const goToNext = () => {
    setCurrent(current === names.length - 1 ? 0 : current + 1);
  }

  React.useEffect(() => {
    setTimeout(goToNext, 4000)
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

