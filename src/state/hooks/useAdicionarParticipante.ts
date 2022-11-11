import { useListaParticipantes } from './useListaParticipantes';
import useMensagemErro from './useMensagemErro';
import { listaParticipantesState } from 'state/atom';
import { useSetRecoilState } from 'recoil';
import capitalizar from 'state/helpers/capitatizar';

const useAdicionarParticipante = () => {
  const listaParticipantes = useListaParticipantes();
  const setListaParticipantes = useSetRecoilState(listaParticipantesState);
  const { setMensagemErro } = useMensagemErro();

  return (nomeParticipante: string) => {
    const ListaEmUpperCase = listaParticipantes.map(nome => nome.toUpperCase());
    const nomeParticipanteEmUpperCase = nomeParticipante.toUpperCase();

    if (ListaEmUpperCase.includes(nomeParticipanteEmUpperCase)) {
      setMensagemErro('Nomes duplicados não são permitidos!');
      setTimeout(() => {
        setMensagemErro('');
      }, 3000);
      return;
    }

    const capitalizedName = capitalizar(nomeParticipante);

    return setListaParticipantes(listaAntiga => [
      ...listaAntiga,
      capitalizedName,
    ]);
  };
};

export default useAdicionarParticipante;
