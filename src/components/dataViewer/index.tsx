import ReactJson from 'react-json-view'

function DataViewer({ users, loading, hasErrors }: any) {
  return (
    <>
      {loading && <span>Loading...</span>}
      {hasErrors && <span>Erro ao buscar os dados, por favor tente novamente!</span>}
      {(!hasErrors && !loading) && (<ReactJson
        data-testid="container:json-viewer"
        src={users}
        name={false}
        displayObjectSize={false}
        theme="apathy:inverted"
        enableClipboard={false}
        displayDataTypes={false}
      />)}
    </>
  );
}

export default DataViewer;
