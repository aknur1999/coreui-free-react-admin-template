import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import CIcon from '@coreui/icons-react'
import { cilChevronBottom } from '@coreui/icons'

import { CListGroup, CListGroupItem, CBadge, CButton } from '@coreui/react'

const Classes = () => {
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
      <CListGroup>
        <CListGroupItem component="a">
          <div className="d-flex w-100 justify-content-between">
            <h5 style={{ marginBottom: 0, display: 'flex', alignItems: 'center' }}>Class A</h5>
            <div>
              <CBadge color="primary" shape="rounded-pill">
                20 students
              </CBadge>
              <CButton onClick={() => handleButtonClick(1)}>
                <CIcon icon={cilChevronBottom} />
              </CButton>
            </div>
          </div>
          {activeList === 1 && (
            <p>
              <CListGroup>
                <CListGroupItem
                  className="d-flex justify-content-between align-items-center"
                  component="a"
                  onClick={navigateToStudentDetails}
                >
                  Jonh Kim
                </CListGroupItem>
                <CListGroupItem className="d-flex justify-content-between align-items-center">
                  Amy Lee
                </CListGroupItem>
              </CListGroup>
            </p>
          )}
        </CListGroupItem>
        <CListGroupItem component="a">
          <div className="d-flex w-100 justify-content-between">
            <h5 style={{ marginBottom: 0, display: 'flex', alignItems: 'center' }}>Class B</h5>
            <div>
              <CBadge color="primary" shape="rounded-pill">
                20 students
              </CBadge>
              <CButton onClick={() => handleButtonClick(2)}>
                <CIcon icon={cilChevronBottom} />
              </CButton>
            </div>
          </div>
          {activeList === 2 && (
            <p>
              <CListGroup>
                <CListGroupItem className="d-flex justify-content-between align-items-center">
                  Jonh Kim
                </CListGroupItem>
                <CListGroupItem className="d-flex justify-content-between align-items-center">
                  Amy Lee
                </CListGroupItem>
              </CListGroup>
            </p>
          )}
        </CListGroupItem>
        <CListGroupItem component="a">
          <div className="d-flex w-100 justify-content-between">
            <h5 style={{ marginBottom: 0, display: 'flex', alignItems: 'center' }}>Class C</h5>
            <div>
              <CBadge color="primary" shape="rounded-pill">
                20 students
              </CBadge>
              <CButton onClick={() => handleButtonClick(3)}>
                <CIcon icon={cilChevronBottom} />
              </CButton>
            </div>
          </div>
          {activeList === 3 && (
            <p>
              <CListGroup>
                <CListGroupItem className="d-flex justify-content-between align-items-center">
                  Jonh Kim
                </CListGroupItem>
                <CListGroupItem className="d-flex justify-content-between align-items-center">
                  Amy Lee
                </CListGroupItem>
              </CListGroup>
            </p>
          )}
        </CListGroupItem>
      </CListGroup>
    </>
  )
}

export default Classes
