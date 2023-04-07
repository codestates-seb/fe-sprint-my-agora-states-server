const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

module.exports = {
    create: (req, res)=>{
        const bodyData = req.body
       
           const newObjlist = {
             id : discussionsData.length+5,
             createdAt : new Date().toISOString(),
             updatedAt : new Date().toISOString(),
             title : bodyData.title,
             url : "https://github.com/codestates-seb/agora-states-fe/discussions/45",
             author: bodyData.author,
              answer: null,
              bodyHTML:
                 '<h2 dir="auto">질문하는 방법 예시</h2>\n<p dir="auto">제목: 함수를 실행했을 때 undefined만 반환됩니다. 콘솔에 찍으면 답은 잘 나와요.</p>\n<p dir="auto">내용:</p>\n<ul dir="auto">\n<li><strong>운영 체제:</strong> 예) macOS</li>\n<li><strong>노드 버전(node -v):</strong> 예) v14.16.0</li>\n<li><strong>현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?</strong><br>\n예) 문자열 코플릿 1번을 풀고 있습니다.<br>\n인자 2개(이름, 성)를 입력받아서 두 개의 문자열을 붙이되, 중간에 띄어쓰기를 작성해야 합니다.</li>\n</ul>\n<p dir="auto">인자 2개가 문자열인지 확인한 다음 맞는다면, 인자 1 + \' \' + 인자 2라고 작성했는데 계속 <strong>undefined</strong>가 나옵니다.</p>\n<ul dir="auto">\n<li><strong>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</strong><br>\n예) 코드에 undefined가 아니면 반환하라고 조건을 더 붙였는데 똑같이 나옵니다.<br>\n디버깅을 하려고 console.log를 사용했는데, 값은 제대로 뜹니다.<br>\nconsole.log를 지우면 계속 undefined가 떠요.</li>\n</ul>\n<p dir="auto">에러 코드를 구글링 해 보니 undefined는 string이 아니라는 답변이 나옵니다.<br>\n제가 어디를 놓치고 있는 것일까요?</p>\n<ul dir="auto">\n<li>\n<p dir="auto"><strong>에러 코드를 붙여넣기 해 주세요.</strong><br>\nAssertionError: expected \'undefined\' to equal \'string\'<br>\nat Context. (/submission/index.test.js:20:59)<br>\nat processImmediate (internal/timers.js:456:21) ...</p>\n</li>\n<li>\n<p dir="auto"><strong>어떠한 부분에서 이해가 안 되었나요?</strong><br>\nconsole.log로 값을 찍으면 원하는 값으로 나오는데,<br>\nconsole.log를 빼고 값을 반환하려고 하면 undefined가 나옵니다.</p>\n</li>\n<li>\n<p dir="auto"><strong>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</strong></p>\n</li>\n</ul>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="\nfunction getFullName(firstName, lastName) {\n\tif(typeof firstName !== undefined &amp;&amp; typeof lastName !== undefined) {\n\t\tfirstName + \' \' + lastName;\n\t\t// console.log(firstName + \' \' + lastName) 얘는 잘 나와요\n\t}\n}"><pre><span class="pl-k">function</span> <span class="pl-en">getFullName</span><span class="pl-kos">(</span><span class="pl-s1">firstName</span><span class="pl-kos">,</span> <span class="pl-s1">lastName</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n\t<span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-k">typeof</span> <span class="pl-s1">firstName</span> <span class="pl-c1">!==</span> <span class="pl-c1">undefined</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-s1">lastName</span> <span class="pl-c1">!==</span> <span class="pl-c1">undefined</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n\t\t<span class="pl-s1">firstName</span> <span class="pl-c1">+</span> <span class="pl-s">\' \'</span> <span class="pl-c1">+</span> <span class="pl-s1">lastName</span><span class="pl-kos">;</span>\n\t\t<span class="pl-c">// console.log(firstName + \' \' + lastName) 얘는 잘 나와요</span>\n\t<span class="pl-kos">}</span>\n<span class="pl-kos">}</span></pre></div>\n<ul dir="auto">\n<li><strong>검색했던 링크가 있다면 첨부해 주세요.</strong><br>\n<a href="https://stackoverflow.com/questions/51603051/javascript-functions-return-undefined" rel="nofollow">https://stackoverflow.com/questions/51603051/javascript-functions-return-undefined</a></li>\n</ul>\n<hr>\n<h2 dir="auto">잘못된 예시</h2>\n<p dir="auto">제목: 문자열 코플릿 10번 안 돼요</p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/59815596/113249242-55dd2380-92f9-11eb-9a5a-d6c9912b936f.png"><img width="409" alt="스크린샷 2021-04-01 오후 2 48 24" src="https://user-images.githubusercontent.com/59815596/113249242-55dd2380-92f9-11eb-9a5a-d6c9912b936f.png" style="max-width: 100%;"></a></p>\n<p dir="auto">해 봤는데 안되네요. 이유가 뭘까요? 알려주세요. ㅠㅠ 이것 때문에 밤새웠어요..</p>',
                  avatarUrl:
                   "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
           }
           
           discussionsData.unshift(newObjlist)
             return res.status(201).send(discussionsData)
         },


          // delete /:id 동일한 id 값 가지는 경우 삭제 


         deletediscussion: (req,res)=>{
          const {id} = req.params

          if(req.params !==undefined){
          discussionsData.filter((el,i)=>{
            if(el.id === Number(id)){
              discussionsData.splice(i,1)
              return res.status(200).send(el)
            }
          })
        }


         }
}