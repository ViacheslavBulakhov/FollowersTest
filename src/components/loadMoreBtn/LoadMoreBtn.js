import { StyledBtn } from './LoadMoreBtn.styled';

export default function LoadMoreBtn({ setPage }) {
  return (
    <StyledBtn onClick={() => setPage(state => state + 1)}>Load More</StyledBtn>
  );
}
