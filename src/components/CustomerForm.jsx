import { useState } from 'react'
import './CustomerForm.css'

const emptyCustomer = {
  documentType: 'DNI',
  documentNumber: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  status: 'Activo',
}

function getCustomerFields(customer) {
  return {
    documentType: customer.documentType,
    documentNumber: customer.documentNumber,
    firstName: customer.firstName,
    lastName: customer.lastName,
    email: customer.email,
    phone: customer.phone,
    address: customer.address,
    status: customer.status,
  }
}

function CustomerForm({ onSave, onUpdate, editingCustomer, onCancelEdit }) {
  const [customer, setCustomer] = useState(() =>
    editingCustomer ? getCustomerFields(editingCustomer) : { ...emptyCustomer },
  )
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  function updateField(event) {
    setCustomer((currentCustomer) => ({
      ...currentCustomer,
      [event.target.name]: event.target.value,
    }))
    setError('')
    setSaved(false)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setSaving(true)
    setError('')
    setSaved(false)

    try {
      if (editingCustomer) {
        await onUpdate(editingCustomer.id, customer)
      } else {
        await onSave(customer)
        setCustomer({ ...emptyCustomer })
      }
      setSaved(true)
    } catch (saveError) {
      setError(saveError.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <h2 id="titulo-registro">{editingCustomer ? 'Editar cliente' : 'Registrar cliente'}</h2>
      <div className="form-grid">
        <label>
          Tipo de documento
          <select name="documentType" value={customer.documentType} onChange={updateField}>
            <option value="DNI">DNI</option>
            <option value="RUC">RUC</option>
            <option value="CE">CE</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
        </label>
        <label>
          Número de documento
          <input
            name="documentNumber"
            value={customer.documentNumber}
            onChange={updateField}
            minLength="8"
            maxLength="12"
            pattern="[0-9]{8,12}"
            inputMode="numeric"
            required
          />
        </label>
        <label>
          Nombres
          <input name="firstName" value={customer.firstName} onChange={updateField} required />
        </label>
        <label>
          Apellidos
          <input name="lastName" value={customer.lastName} onChange={updateField} required />
        </label>
        <label>
          Correo electrónico
          <input name="email" type="email" value={customer.email} onChange={updateField} required />
        </label>
        <label>
          Teléfono
          <input name="phone" type="tel" value={customer.phone} onChange={updateField} required />
        </label>
        <label>
          Dirección
          <input name="address" value={customer.address} onChange={updateField} required />
        </label>
        <label>
          Estado
          <select name="status" value={customer.status} onChange={updateField}>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </label>
      </div>
      <div className="form-footer">
        {error && <p className="form-feedback error" role="alert">{error}</p>}
        {saved && (
          <p className="form-feedback success" role="status">
            {editingCustomer ? 'Cambios guardados.' : 'Cliente guardado.'}
          </p>
        )}
        <button className="save-button" type="submit" disabled={saving}>
          {saving ? 'Guardando...' : editingCustomer ? 'Guardar cambios' : 'Guardar cliente'}
        </button>
        {editingCustomer && (
          <button className="cancel-button" type="button" onClick={onCancelEdit} disabled={saving}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  )
}

export default CustomerForm
