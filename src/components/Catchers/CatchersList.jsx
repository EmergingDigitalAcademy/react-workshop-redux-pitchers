import { useSelector, useDispatch } from 'react-redux';

function CatchersList (){
    const dispatch = useDispatch();
    const catcherList = useSelector(store => store.catchers);
    return (
       <>
       <ul>
        {catcherList.map((catcher, index) => (
          <li
            key={index}
            onClick={() => dispatch ({
              type: 'SET_ACTIVECATCHER',
              payload: catcher
            })}
          >
            {catcher}
          </li>
        ))}
      </ul>
      </>
    )
}

export default CatchersList;