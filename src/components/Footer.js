
import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
        <TheFooter>
            <ul>
            <li><a>Tesla Clone © 2023 (Harsh Aggarwal)</a></li>
            <li><a href="#">Privacy & Legal</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Get Newsletter</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Forums</a></li>
            <li><a href="#">Locations</a></li>
            </ul>
        </TheFooter>
    </FooterWrapper>
  );
}

export default Footer;

const TheFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background-color: #4e4e4e;
    color: white;
    padding: 20px;
    margin-top: 20px;
    h2 {
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 20px;
        color: black;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
        li {
            margin: 0 10px;
            a {
                font-size: 12px;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`

const FooterWrapper = styled.div`
    width: 100vw;
    bottom: 0;
    left: 0;
    right: 0;
`