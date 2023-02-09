const MainRightLI = ({ data }) => {

    function Unix_timestamp(t) {
        var date = new Date(t * 1000);
        var year = date.getFullYear();
        var month = "0" + (date.getMonth() + 1);
        var day = "0" + date.getDate();
        var hour = "0" + date.getHours();
        var minute = "0" + date.getMinutes();
        var second = "0" + date.getSeconds();
        if (hour < 12) {
          return year + "-" + month.substr(-2) + "-" + day.substr(-2) + " 오전 " + hour.substr(-2) + ":" + minute.substr(-2) + ":" + second.substr(-2);
        } else {
          return year + "-" + month.substr(-2) + "-" + day.substr(-2) + " 오후 " + hour.substr(-2) + ":" + minute.substr(-2) + ":" + second.substr(-2);
        }
      }
      function Unix_timestampConv(t) {
        return Math.floor(t.getTime() / 1000);
      }

    return <li>
        <a href={data.url}>
            <div id="right_img">
                <img src={data.avatarUrl} alt="" />
            </div>
            <div id="right_content">
                <div id="right_content_top">
                    {data.title}
                </div>
                <div id="right_content_bottom">
                    <span id="author_span">
                        {data.author}
                    </span>
                    <span>
                        {Unix_timestamp(Unix_timestampConv(new Date(data.createdAt)))}
                    </span>
                </div>
            </div>
        </a>
    </li>
}

export default MainRightLI;