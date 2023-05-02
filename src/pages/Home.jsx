import { Avatar, Card, List, Segmented } from 'antd'
import React, { useState } from 'react'
import { Module } from '../components/organism'
import { faker } from "@faker-js/faker";
import TableHome from './_components/TableHome';

function Home() {
  const [options, setOptions] = useState(['Diaria', 'Semanal', 'Mensual']);
  const [current, setCurrent] = useState('Diaria')

  let dataToday = [];
  for (let i = 0; i < 19; i++) {
    dataToday = [
      ...dataToday,
      {
        key: faker.datatype.uuid(),
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        avatar: faker.internet.avatar(),
        phone: faker.phone.number("+502 ########"),
        start: faker.date.soon(1, new Date()),
        interval: faker.datatype.number({ min: 15, max: 60, precision: 15 })
      },
    ];
  }

  let data1 = [];
  for (let i = 0; i < 8; i++) {
    data1 = [
      ...data1,
      {
        key: faker.datatype.uuid(),
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        avatar: faker.internet.avatar(),
        phone: faker.phone.number("+502 ########"),
        start: faker.date.soon(2, new Date()),
        interval: faker.datatype.number({ min: 15, max: 60, precision: 15 })
      },
    ];
  }

  let data2 = [];
  for (let i = 0; i < 8; i++) {
    data2 = [
      ...data2,
      {
        key: faker.datatype.uuid(),
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        avatar: faker.internet.avatar(),
        phone: faker.phone.number("+502 ########"),
        start: faker.date.soon(3, new Date()),
        interval: faker.datatype.number({ min: 15, max: 60, precision: 15 })
      },
    ];
  }

  let data3 = [];
  for (let i = 0; i < 8; i++) {
    data3 = [
      ...data3,
      {
        key: faker.datatype.uuid(),
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        avatar: faker.internet.avatar(),
        phone: faker.phone.number("+502 ########"),
        start: faker.date.soon(4, new Date()),
        interval: faker.datatype.number({ min: 15, max: 60, precision: 15 })
      },
    ];
  }

  let data4 = [];
  for (let i = 0; i < 8; i++) {
    data4 = [
      ...data4,
      {
        key: faker.datatype.uuid(),
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        avatar: faker.internet.avatar(),
        phone: faker.phone.number("+502 ########"),
        start: faker.date.soon(5, new Date()),
        interval: faker.datatype.number({ min: 15, max: 60, precision: 15 })
      },
    ];
  }

  let data5 = [];
  for (let i = 0; i < 8; i++) {
    data5 = [
      ...data5,
      {
        key: faker.datatype.uuid(),
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        avatar: faker.internet.avatar(),
        phone: faker.phone.number("+502 ########"),
        start: faker.date.soon(6, new Date()),
        interval: faker.datatype.number({ min: 15, max: 60, precision: 15 })
      },
    ];
  }

  let data6 = [];
  for (let i = 0; i < 8; i++) {
    data6 = [
      ...data6,
      {
        key: faker.datatype.uuid(),
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        avatar: faker.internet.avatar(),
        phone: faker.phone.number("+502 ########"),
        start: faker.date.soon(7, new Date()),
        interval: faker.datatype.number({ min: 15, max: 60, precision: 15 })
      },
    ];
  }

  let datings = [];
  for (let i = 0; i < 100; i++) {
    datings = [
      ...datings,
      {
        key: faker.datatype.uuid(),
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        avatar: faker.internet.avatar(),
        phone: faker.phone.number("+502 ########"),
        month: faker.date.month({ abbr: true }),
        interval: faker.datatype.number({ min: 15, max: 60, precision: 15 })
      },
    ];
  }
  return (
    <Module title="Agenda">
      <Segmented block options={options} className='w-full justify-between my-4' onChange={(v) => setCurrent(v)} />

      {current === 'Diaria' &&
        <>
          <h2>Hoy</h2>
          <List
            pagination={{ position: 'bottom', align: 'end' }}
            grid={{ gutter: 16, column: 3 }}
            dataSource={dataToday}
            renderItem={(item) => (
              <List.Item>
                <Card className='shadow-lg' title={
                  <>
                    <div className="flex justify-between">
                      <Avatar src={item.avatar} />
                      <div className='flex flex-col items-end'>
                        <span>{item.name}</span>
                        <p className='text-sm m-0 italic text'>{item.phone}</p>
                      </div>
                    </div>
                  </>
                }>
                  <h5>Hora de Inicio: {new Date(item.start).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                  <h5>Hora de Fin: {new Date(new Date(item.start).getTime() + (item.interval * 60000)).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                  <h5>Intervalo de Consulta: {item.interval} minutos</h5>
                </Card>
              </List.Item>
            )}
          />
        </>
      }
      {current === 'Semanal' &&
        <>
          <h2>Esta Semana</h2>
          <h3>
            {new Date().toLocaleDateString()}
          </h3>
          <List
            pagination={{ position: 'bottom', align: 'end' }}
            dataSource={dataToday}
            grid={{ column: 4 }}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src={item.avatar} />
                  }
                  title={
                    <>
                      <h3 className='m-1'>
                        {item.name}
                      </h3>
                      <p className='text-sm m-0 italic text'>{item.phone}</p>
                    </>
                  }
                  description={
                    <>
                      <h5 className='m-0'>Hora de Inicio: {new Date(item.start).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                      <h5 className='m-0'>Hora de Fin: {new Date(new Date(item.start).getTime() + (item.interval * 60000)).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                      <h5 className='m-0'>Intervalo de Consulta: {item.interval} minutos</h5>
                    </>
                  }
                />
              </List.Item>
            )}
          />
          <h3>
            {new Date(new Date().setDate(2)).toLocaleDateString()}
          </h3>
          <List
            pagination={{ position: 'bottom', align: 'end' }}
            dataSource={data1}
            grid={{ column: 4 }}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src={item.avatar} />
                  }
                  title={
                    <>
                      <h3 className='m-1'>
                        {item.name}
                      </h3>
                      <p className='text-sm m-0 italic text'>{item.phone}</p>
                    </>
                  }
                  description={
                    <>
                      <h5 className='m-0'>Hora de Inicio: {new Date(item.start).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                      <h5 className='m-0'>Hora de Fin: {new Date(new Date(item.start).getTime() + (item.interval * 60000)).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                      <h5 className='m-0'>Intervalo de Consulta: {item.interval} minutos</h5>
                    </>
                  }
                />
              </List.Item>
            )}
          />
          <h3>
            {new Date(new Date().setDate(3)).toLocaleDateString()}
          </h3>
          <List
            pagination={{ position: 'bottom', align: 'end' }}
            dataSource={data2}
            grid={{ column: 4 }}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src={item.avatar} />
                  }
                  title={
                    <>
                      <h3 className='m-1'>
                        {item.name}
                      </h3>
                      <p className='text-sm m-0 italic text'>{item.phone}</p>
                    </>
                  }
                  description={
                    <>
                      <h5 className='m-0'>Hora de Inicio: {new Date(item.start).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                      <h5 className='m-0'>Hora de Fin: {new Date(new Date(item.start).getTime() + (item.interval * 60000)).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                      <h5 className='m-0'>Intervalo de Consulta: {item.interval} minutos</h5>
                    </>
                  }
                />
              </List.Item>
            )}
          />
          <h3>
            {new Date(new Date().setDate(4)).toLocaleDateString()}
          </h3>
          <List
            pagination={{ position: 'bottom', align: 'end' }}
            dataSource={data3}
            grid={{ column: 4 }}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src={item.avatar} />
                  }
                  title={
                    <>
                      <h3 className='m-1'>
                        {item.name}
                      </h3>
                      <p className='text-sm m-0 italic text'>{item.phone}</p>
                    </>
                  }
                  description={
                    <>
                      <h5 className='m-0'>Hora de Inicio: {new Date(item.start).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                      <h5 className='m-0'>Hora de Fin: {new Date(new Date(item.start).getTime() + (item.interval * 60000)).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                      <h5 className='m-0'>Intervalo de Consulta: {item.interval} minutos</h5>
                    </>
                  }
                />
              </List.Item>
            )}
          />
          <h3>
            {new Date(new Date().setDate(5)).toLocaleDateString()}
          </h3>
          <List
            pagination={{ position: 'bottom', align: 'end' }}
            dataSource={data4}
            grid={{ column: 4 }}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src={item.avatar} />
                  }
                  title={
                    <>
                      <h3 className='m-1'>
                        {item.name}
                      </h3>
                      <p className='text-sm m-0 italic text'>{item.phone}</p>
                    </>
                  }
                  description={
                    <>
                      <h5 className='m-0'>Hora de Inicio: {new Date(item.start).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                      <h5 className='m-0'>Hora de Fin: {new Date(new Date(item.start).getTime() + (item.interval * 60000)).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                      <h5 className='m-0'>Intervalo de Consulta: {item.interval} minutos</h5>
                    </>
                  }
                />
              </List.Item>
            )}
          />
          <h3>
            {new Date(new Date().setDate(6)).toLocaleDateString()}
          </h3>
          <List
            pagination={{ position: 'bottom', align: 'end' }}
            dataSource={data5}
            grid={{ column: 4 }}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src={item.avatar} />
                  }
                  title={
                    <>
                      <h3 className='m-1'>
                        {item.name}
                      </h3>
                      <p className='text-sm m-0 italic text'>{item.phone}</p>
                    </>
                  }
                  description={
                    <>
                      <h5 className='m-0'>Hora de Inicio: {new Date(item.start).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                      <h5 className='m-0'>Hora de Fin: {new Date(new Date(item.start).getTime() + (item.interval * 60000)).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                      <h5 className='m-0'>Intervalo de Consulta: {item.interval} minutos</h5>
                    </>
                  }
                />
              </List.Item>
            )}
          />
          <h3>
            {new Date(new Date().setDate(7)).toLocaleDateString()}
          </h3>
          <List
            pagination={{ position: 'bottom', align: 'end' }}
            dataSource={data6}
            grid={{ column: 4 }}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src={item.avatar} />
                  }
                  title={
                    <>
                      <h3 className='m-1'>
                        {item.name}
                      </h3>
                      <p className='text-sm m-0 italic text'>{item.phone}</p>
                    </>
                  }
                  description={
                    <>
                      <h5 className='m-0'>Hora de Inicio: {new Date(item.start).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                      <h5 className='m-0'>Hora de Fin: {new Date(new Date(item.start).getTime() + (item.interval * 60000)).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h5>
                      <h5 className='m-0'>Intervalo de Consulta: {item.interval} minutos</h5>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </>
      }
      {current === 'Mensual' &&
        <>
          <h1>Citas por Mes</h1>
          <TableHome datings={datings}></TableHome>
        </>
      }

    </Module>
  )
}

export default Home