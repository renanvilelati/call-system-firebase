import styled from "styled-components";

export const DashboardContainer = styled.div`

  margin: 0;
  padding: 0;
  background-color: #181c2e;
  position: fixed;
  height: 100%;
  overflow: auto;


div{
  background: url('../../assets/cover.png');
  background-color: #181c2e;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 150px;
}

div{
  padding-top: 30px;
}

div img {
  width: 90px;
  height: 90px;
  display: block;
  margin: auto;
  border-radius: 50%;
  object-fit: cover;
  filter: drop-shadow(2px 3px 6px #121212);
  -webkit-filter: drop-shadow(2px 3px 6px #121212);
}

a {
  display: block;
  padding: 16px;
  display: flex;
  text-decoration: none;
  color: rgba(255,255,255, 0.7);
  flex-direction: row;
  align-items: center;
  transition: ease-in-out 0.4s;
}

a svg{
  margin-right: 0.5rem;
}

a:hover{
  background-color: #121212;
  color: #FFF;
}

.content{
  margin-left: 200px;
  padding: 1px 16px;
}
`