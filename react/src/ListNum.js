

const ListNum = ({ listNum, pageScroll }) => {
    let scrollNum
    let scrollList = [0, 620.8, 1241.6, 1862.4, 2483.2]
    if (scrollList[listNum - 1] !== 0) {
        scrollNum = scrollList[listNum - 1] +listNum*5
    }
    return <>
        {scrollNum === undefined ?
            <span onClick={() => pageScroll(0)}>{listNum}</span>
            :
            <span onClick={() => pageScroll(scrollNum)}>{listNum}</span>}
    </>
}

export default ListNum