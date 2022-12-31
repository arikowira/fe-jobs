import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import SButton from './button';

function Tbody({ data, display, status, editUrl }) {
  const navigate = useNavigate();
  return (
    <tbody>
      {status === 'process' ? (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: 'center' }}>
            <div className='flex items-center justify-center'>
              <Spinner animation='border' variant='primary' />
            </div>
          </td>
        </tr>
      ) : data.length ? (
        data.map((data, index) => {
          return (
            <tr key={index}>
              {Object.keys(data).map(
                (key) =>
                  display.indexOf(key) > -1 && <td key={key}>{data[key]}</td>
              )}
              <td>
                {editUrl && (
                  <SButton
                    variant='warning'
                    size='s'
                    action={() => navigate(`detail/${data.id}`)}
                  >
                    Detail
                  </SButton>
                )}
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: 'center' }}>
            Tidak Ditemukan Data
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default Tbody;
