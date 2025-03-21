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

import { NavLink } from "react-router-dom";
import { dateFormatter } from "../../utils/formatter";

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>
          <div>
            <p>
              <NavLink to="/">
                <a href="">
                  <CaretLeft size={16} />
                  VOLTAR
                </a>
              </NavLink>
            </p>
          </div>
          <div>
            <a href="#" target="_blank">
              VER NO GITHUB
              <ArrowUpRight size={16} />
            </a>
          </div>
        </PostTitle>
        <h1></h1>
        <PostAnchors>
          <div>
            <GithubLogo size={18} />
            <span></span>
          </div>

          <div>
            <Calendar size={18} />
            <span></span>
          </div>

          <div>
            <ChatCircle size={18} />
            <span> comentários</span>
          </div>
        </PostAnchors>
      </PostHeader>

      <PostContent>
        <p></p>
      </PostContent>
    </PostContainer>
  );
}
