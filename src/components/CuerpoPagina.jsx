import DeleteCustomerButton from './DeleteCustomerButton.jsx'

function CuerpoPagina({ customers, total, loading, error, onDelete, onEdit, form }) {
  return (
    <div className="catalogo">
      <section className="registro" aria-labelledby="titulo-registro">
        {form}
      </section>

      {error && <p className="message error" role="alert">{error}</p>}

      <section className="lista-clientes" aria-labelledby="titulo-clientes">
        <div className="catalogo-encabezado">
          <h2 id="titulo-clientes">Clientes registrados</h2>
          <span className="count">{loading ? 'Cargando...' : `${total} clientes`}</span>
        </div>

        <div className="table-card">
          {loading ? (
            <p className="message">Cargando clientes...</p>
          ) : error ? null : customers.length === 0 ? (
            <p className="message">No hay clientes registrados.</p>
          ) : (
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tipo de documento</th>
                    <th>Número de documento</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Correo electrónico</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id}>
                      <td>{customer.id}</td>
                      <td>{customer.documentType}</td>
                      <td>{customer.documentNumber}</td>
                      <td>{customer.firstName}</td>
                      <td>{customer.lastName}</td>
                      <td>{customer.email}</td>
                      <td>{customer.phone}</td>
                      <td>{customer.address}</td>
                      <td>
                        <span className={`status ${customer.status === 'Activo' ? 'active' : 'inactive'}`}>
                          {customer.status}
                        </span>
                      </td>
                      <td>
                        <div className="acciones-cliente">
                          <button
                            className="edit-button"
                            type="button"
                            onClick={() => onEdit(customer)}
                            aria-label={`Editar a ${customer.firstName} ${customer.lastName}`}
                          >
                            Editar
                          </button>
                          <DeleteCustomerButton customer={customer} onDelete={onDelete} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default CuerpoPagina
