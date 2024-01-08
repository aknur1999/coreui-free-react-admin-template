import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import classNames from 'classnames'
import CIcon from '@coreui/icons-react'
import { cilChevronBottom } from '@coreui/icons'

import {
  CListGroup,
  CListGroupItem,
  CBadge,
  CButton,
  CImage,
  CContainer,
  CRow,
  CCol,
  CForm,
  CFormTextarea,
} from '@coreui/react'

import avatar1 from 'src/assets/images/avatars/2.jpg'
import prob1 from 'src/assets/images/prob1.png'
import prob2 from 'src/assets/images/prob2.png'

const Student = () => {
  const [activeList, setActiveList] = useState(null)
  const navigate = useNavigate()

  const handleButtonClick = (listId) => {
    setActiveList((prevActiveList) => (prevActiveList === listId ? null : listId))
  }
  const navigateToStudentDetails = () => {
    navigate('/student')
  }

  return (
    <>
      <CContainer>
        <CRow>
          <CCol xs={3}>
            <CImage rounded src={avatar1} width={200} height={200} />
          </CCol>
          <CCol xs={8} style={{ marginTop: '60px' }}>
            <h5 style={{ marginBottom: '30px', fontWeight: 'bold' }}>Name : John Kim</h5>
            <p>
              <h5>CLass A</h5>
            </p>
          </CCol>
        </CRow>
        <CRow>
          <h5 className="border-bottom p-3 mt-4">Homeworks</h5>
        </CRow>
        <CRow>
          <CListGroup>
            <CListGroupItem component="a">
              <div className="d-flex w-100 justify-content-between">
                <h5 style={{ marginBottom: 0, display: 'flex', alignItems: 'center' }}>
                  Homework 1
                </h5>
                <div>
                  <CBadge color="primary" shape="rounded-pill">
                    6/10
                  </CBadge>
                  <CButton onClick={() => handleButtonClick(1)}>
                    <CIcon icon={cilChevronBottom} />
                  </CButton>
                </div>
              </div>
              {activeList === 1 && (
                <p>
                  <CContainer className="mt-3">
                    <CRow>
                      <CCol>
                        <CImage rounded src={prob1} width={300} height={200} />
                      </CCol>
                      <CCol>
                        <CImage rounded src={prob2} width={300} height={200} />
                      </CCol>
                    </CRow>
                    <CRow className="mt-3">
                      <h5>Feedback</h5>
                    </CRow>
                    <CRow>
                      <CForm>
                        <CCol>
                          <CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>
                        </CCol>
                        <CCol xs="auto" className="mt-3">
                          <CButton type="submit" color="primary">
                            Submit
                          </CButton>
                        </CCol>
                      </CForm>
                    </CRow>
                  </CContainer>
                </p>
              )}
            </CListGroupItem>
            <CListGroupItem component="a">
              <div className="d-flex w-100 justify-content-between">
                <h5 style={{ marginBottom: 0, display: 'flex', alignItems: 'center' }}>
                  Homework 2
                </h5>
                <div>
                  <CBadge color="primary" shape="rounded-pill">
                    7/10
                  </CBadge>
                  <CButton onClick={() => handleButtonClick(2)}>
                    <CIcon icon={cilChevronBottom} />
                  </CButton>
                </div>
              </div>
              {activeList === 2 && (
                <p>
                  <CContainer className="mt-3">
                    <CRow>
                      <CCol>
                        <CImage rounded src={prob1} width={300} height={200} />
                      </CCol>
                      <CCol>
                        <CImage rounded src={prob2} width={300} height={200} />
                      </CCol>
                    </CRow>
                    <CRow className="mt-3">
                      <h5>Feedback</h5>
                    </CRow>
                    <CRow>
                      <CForm>
                        <CCol>
                          <CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>
                        </CCol>
                        <CCol xs="auto" className="mt-3">
                          <CButton type="submit" color="primary">
                            Submit
                          </CButton>
                        </CCol>
                      </CForm>
                    </CRow>
                  </CContainer>
                </p>
              )}
            </CListGroupItem>
            <CListGroupItem component="a">
              <div className="d-flex w-100 justify-content-between">
                <h5 style={{ marginBottom: 0, display: 'flex', alignItems: 'center' }}>
                  Homework 3
                </h5>
                <div>
                  <CBadge color="primary" shape="rounded-pill">
                    10/10
                  </CBadge>
                  <CButton onClick={() => handleButtonClick(3)}>
                    <CIcon icon={cilChevronBottom} />
                  </CButton>
                </div>
              </div>
              {activeList === 3 && (
                <p>
                  <CContainer className="mt-3">
                    <CRow>
                      <CCol>
                        <CImage rounded src={prob1} width={300} height={200} />
                      </CCol>
                      <CCol>
                        <CImage rounded src={prob2} width={300} height={200} />
                      </CCol>
                    </CRow>
                    <CRow className="mt-3">
                      <h5>Feedback</h5>
                    </CRow>
                    <CRow>
                      <CForm>
                        <CCol>
                          <CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>
                        </CCol>
                        <CCol xs="auto" className="mt-3">
                          <CButton type="submit" color="primary">
                            Submit
                          </CButton>
                        </CCol>
                      </CForm>
                    </CRow>
                  </CContainer>
                </p>
              )}
            </CListGroupItem>
          </CListGroup>
        </CRow>
      </CContainer>
    </>
  )
}

export default Student
