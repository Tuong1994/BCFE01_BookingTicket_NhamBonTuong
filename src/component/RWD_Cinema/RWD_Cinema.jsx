import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

function RWD_Cinema(props) {
  const Accordion = withStyles({
    root: {
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);

  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);

  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);

  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const { danhSachRapChieu } = props;

  return (
    <div className="rwd-cinema__wrapper">
      <div className="accordion" id="accordionExample">

        {danhSachRapChieu?.map((rapChieu, index) => {
          let activeClass = index === 0 ? "show" : "";

          return <div className="card" key={index}>
            <div className="card-header" id="headingOne">
              <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={`#${rapChieu.maHeThongRap}`} aria-expanded="false" aria-controls="collapseOne">
                <img src={rapChieu.logo} alt={rapChieu.tenHeThongRap} />
                <span><i class="fa fa-angle-down"></i></span>
              </button>
            </div>

            <div id={rapChieu.maHeThongRap} className={`collapse ${activeClass}`} aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">

                {rapChieu.lstCumRap?.slice(0,4).map((cumRap, index) => {
                  return <Accordion key={index} square expanded={expanded === index} onChange={handleChange(index)}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Typography className="cinema__info">
                        <img src="../../img/rapChieu.png" alt={cumRap.tenCumRap} />
                        <div className="cinema__name">
                          <p>{cumRap.tenCumRap}</p>
                          <p>{cumRap.diaChi}</p>
                        </div>
                      </Typography>
                    </AccordionSummary>

                    {cumRap.danhSachPhim?.slice(0,6).map((film, index) => {
                      return <AccordionDetails className="film__body" key={index}>
                        <Typography className="film__info">
                          <img src={film.hinhAnh} alt={film.tenPhim} />
                          <div className="film__name">
                            <p>{film.tenPhim}</p>
                            {film.lstLichChieuTheoPhim?.slice(0,4).map((lichChieu, index) => {
                              return <NavLink to={`/film_detail/${film.maPhim}`} className="button" key={index}>
                                {moment(lichChieu.ngayChieuGioChieu).format("dd hh:mm:A")}
                              </NavLink>
                            })}
                            <NavLink to={`/film_detail/${film.maPhim}`}  className="button btn-time">Chọn giờ chiếu</NavLink>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    })}
                  </Accordion>
                })}

              </div>
            </div>
          </div>
        })}

      </div>
    </div>
  );
}

export default RWD_Cinema;