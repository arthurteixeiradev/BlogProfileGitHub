import {
  ArrowUpRight,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";
import {
  PostAnchors,
  PostContainer,
  PostContent,
  PostHeader,
  PostTitle,
} from "./styles";

import { NavLink, useParams } from "react-router-dom";
import { dateFormatter } from "../../utils/formatter";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface Issue {
  number: number;
  title: string;
  body: string;
  created_at: string;
  user: { login: string };
  comments: number;
  html_url: string;
}

export function Post() {
  const { number } = useParams();
  const [issueData, setIssueData] = useState<Issue | null>(null);

  async function fetchIssue() {
    const response = await api.get(`/repos/lucaspedronet/TudoLista/issues`);
    console.log(response);
    setIssueData(response.data);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchIssue();
    }, 1000);
    return () => clearTimeout(timer);
  }, [number]);

  if (!issueData) {
    return (
      <p style={{ textAlign: "center", paddingTop: "1rem" }}>
        Carregando Post...
      </p>
    );
  }

  console.log(issueData);

  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>
          <div>
            <p>
              <NavLink to="/">
                <CaretLeft size={16} />
                VOLTAR
              </NavLink>
            </p>
          </div>
          <div>
            <a href={issueData.html_url} target="_blank">
              VER NO GITHUB
              <ArrowUpRight size={16} />
            </a>
          </div>
        </PostTitle>
        <h1>{issueData.title}</h1>
        <PostAnchors>
          <div>
            <GithubLogo size={18} />
            <span>{issueData.user.login}</span>
          </div>

          <div>
            <Calendar size={18} />
            <span>{dateFormatter.format(new Date(issueData.created_at))}</span>
          </div>

          <div>
            <ChatCircle size={18} />
            <span>{issueData.comments} comentários</span>
          </div>
        </PostAnchors>
      </PostHeader>

      <PostContent>
        <p>{issueData.body}</p>
      </PostContent>
    </PostContainer>
  );
}
