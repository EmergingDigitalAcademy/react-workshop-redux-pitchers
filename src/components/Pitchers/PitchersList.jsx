import { useSelector, useDispatch } from 'react-redux';

function PitchersList() {
    const pitcherList = useSelector(store => store.pitchers);
    const dispatch = useDispatch();
    return (
        <ul>
        {pitcherList.map((pitcher, index) => (
          <li
            key={index}
            onClick={() => dispatch ({
              type: 'SET_ACTIVEPITCHER',
              payload: pitcher
            })}
          >
            {pitcher}
          </li>
        ))}
      </ul>
    )
}

export default PitchersList;