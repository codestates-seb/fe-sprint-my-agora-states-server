import uuid from 'react-uuid';
import styled from 'styled-components';

const CHECKED_ICON_URL = `${process.env.PUBLIC_URL}/assets/checked.png`;
const UNCHECKED_ICON_URL = `${process.env.PUBLIC_URL}/assets/unchecked.png`;

function Content({ discussions }) {
  return (
    <DiscussionsWrapper>
      {discussions.map(({ avatarUrl, title, author, createdAt, answer }) => (
        <Discussion data-id={uuid()} key={uuid()}>
          <AvatarWrapper>
            <Avatar src={avatarUrl} alt={`${author}의 프로필`} />
          </AvatarWrapper>
          <ContentWrapper>
            <Title>
              <Link>{title}</Link>
            </Title>
            <Information>
              {author} / {createdAt}
            </Information>
          </ContentWrapper>
          <AnswerIcon
            src={answer ? CHECKED_ICON_URL : UNCHECKED_ICON_URL}
            alt={answer ? '답변 완료' : '답변 미완료'}
          />
        </Discussion>
      ))}
    </DiscussionsWrapper>
  );
}

const DiscussionsWrapper = styled.ul`
  display: flex;
  flex-flow: column wrap;
  gap: 2rem;
`;

const Discussion = styled.li`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem 1.25rem;
  border-radius: 0.75rem;
  box-shadow: 0px 0.25rem 0.5rem rgba(128, 112, 161, 0.3);
  transition: transform 0.3s;
  ${({ theme }) => theme.discussionContainer};

  :hover {
    transform: scale(1.08);
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 3rem;
  border-radius: 50%;
  font-size: 0.75rem;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const Link = styled.a`
  word-break: break-all;
  ${({ theme }) => theme.discussionLink};
`;

const Information = styled.p`
  text-align: end;
  font-size: 0.75rem;
  ${({ theme }) => theme.discussionInfo};
`;

const AnswerIcon = styled.img`
  width: 2rem;
`;

export default Content;
