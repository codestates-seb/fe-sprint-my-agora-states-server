## Bare Minimum Requirements - Server 테스트 목록

### GET / 요청: Health check

- [x] 상태 코드 200과 함께 응답을 보냅니다. (35 ms)

### GET /discussions 요청

- [ ] 상태 코드 200과 함께 응답을 보냅니다. (6 ms)
- [ ] 모든 discussions 목록을 응답으로 보냅니다. (3 ms)

### GET /discussions/:id 요청

- [ ] discussionsData에 해당 id와 일치하는 데이터가 존재하는 경우, 상태 코드 200과 함께 응답을 보냅니다. (3 ms)
- [x] discussionsData에 해당 id와 일치하는 데이터가 존재하지 않는 경우, 상태 코드 404와 함께 응답을 보냅니다. (3 ms)
- [ ] 응답의 body 속성으로 id, title, url, author, bodyHTML, avatarUrl이 있어야 합니다. (2 ms)
- [ ] discussionsData 중 해당 id와 일치하는 discussion을 응답으로 보냅니다. (6 ms)
