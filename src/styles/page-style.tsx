"use client";
import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  width: calc(33% - 2rem);
`;

export const CardImage = styled.img`
  width: 100%;
`;