import React from "react";
import CharacterCard from "../CharacterCard";
import { connect } from "react-redux";
import { fetchCharacters } from "../../store/actions";

class CardList extends React.Component {
  hasError = () => {
    const { error } = this.props;
    return error !== "";
  };

  componentDidMount() {
    const { getCharacters } = this.props;
    getCharacters();
  }

  render() {
    const { characters, isLoading } = this.props;
    if (isLoading) return <h1>Carregando...</h1>;

    return !this.hasError() ? (
      <section className="card-list">
        {characters.map((item) => (
          <CharacterCard character={item} key={Math.random()} />
        ))}
      </section>
    ) : (
      <h1>Erro ao fazer o request</h1>
    );
  }
}
const mapStateToProps = (state) => ({
  characters: state.characters,
  isLoading: state.isLoading,
  error: state.error
});

const mapDispatchToProps = (dispatch) => ({
  //FAZER O DISPATCH DA ACTION "actionFetchCharacters"
  getCharacters: () => dispatch(fetchCharacters())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
