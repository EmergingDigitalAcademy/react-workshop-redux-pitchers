import { useSelector} from 'react-redux';

function TotalPitchers(){
    
    const pitcherList = useSelector(store => store.pitchers);

    return (
        <>
        <div>Total Pitchers: {pitcherList.length}</div>
        </>
    )
}

export default TotalPitchers;