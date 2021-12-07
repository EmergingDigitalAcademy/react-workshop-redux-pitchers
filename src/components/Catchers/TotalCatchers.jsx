import { useSelector } from 'react-redux';

function TotalCatchers() {
    const catcherList = useSelector(store => store.catchers);
    return (
        <div>Total Catchers: {catcherList.length}</div>
    )
}

export default TotalCatchers;