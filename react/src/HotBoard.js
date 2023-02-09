const HotBoard = ({data,i}) => {
    return <div className="main_hot">
        <div id="hot_left">
            <div>
            <img src={data.avatarUrl} alt="" />
            </div>
            <div>
            {data.author}
            </div>
        </div>
        <div id="hot_right">
            <div>
            {data.title}
            </div>
        </div>
    </div>
}

export default HotBoard;