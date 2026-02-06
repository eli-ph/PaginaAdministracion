const acercaCards = document.querySelectorAll(".acercade__elemento");
const modal = document.getElementById("servicioSocial__infoDespegable");
const titulo = document.getElementById("servicioSocial__infoDespegableTitulo");
const lista = document.getElementById("servicioSocial__lista");
const cerrar = document.querySelector(".servicioSocial__infoDespegableClose");

const infoAcerca = {
  soporte: {
    titulo: "Soporte técnico",
    items: [
      "Configuracion y mantenimiento de equipo de cómputo, utilizaods en laboratorios de docencia y en cubiculos de profesores",
      "Diagnóstico y reparación de equipos",
      "Atención a fallas de hardware",
      "Mantenimiento preventivo"
    ]
  },
  software: {
    titulo: "Instalación de software",
    items: [
      "Instalación de sistemas operativos",
      "Instalación de software especializado requerido para cada asignatura que se imparte en el Departamento de Computación"
    ]
  },
  red: {
    titulo: "Infraestructura de red",
    items: [
      "Cableado estructurado",
      "Configuración de switches",
      "Soporte a red interna",
      "Atención a fallas y diagnostico de la red"
    ]
  },
  gestion: {
    titulo: "Gestión académico-administrativa",
    items: [
      "Apopyo en la organización de actividades académicas como eventos, transmisiones, cursos, diplomados, visitas, etc",
      "Administrativas como impresion de publicidad, levantamiento de inventarios, documentación de procedimientos"
    ]
  }
};

acercaCards.forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.info;
    const data = infoAcerca[key];

    titulo.textContent = data.titulo;
    lista.innerHTML = "";

    data.items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      lista.appendChild(li);
    });

    modal.style.display = "flex";
  });
});

cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

(function(){
    const data = {
    electrica_comunicaciones: {
      title: "Ingeniería eléctrica electrónica y e ingeniería en telecomunicaciones",
      items: ["Mantenimiento preventivo y correctivo de equipo de cómputo", "Revisión e implementación de infraestructura de red", "Participación en el desarrollo de proyectos", "Asesorías académicas y técnicas en áreas de cómputo", "Brindar soporte técnico"]
    },
    compu: {
      title: "Ingeniería en computación (FI)",
      items: ["Mantenimiento preventivo y correctivo de equipo de cómputo", "Revisión e implementación de infraestructura de red", "Desarrollo de software", "Participación en el desarrollo de proyectos", "Asesorías académicas y técnicas en áreas de cómputo"]
    },
    industrial: {
      title: "Ingeniería industrial (FI)",
      items: ["Soporte mantenimiento preventivo y correctivo de equipo de cómputo", "Asesorías académicas y técnicas en áreas de cómputo", "Descripción de procesos", "Participación en el desarrollo de proyectos", "Documentación de software"]
    },
    mecatronica: {
      title: "Ingeniería mecatrónica (FI)",
      items: ["Mantenimiento preventivo y correctivo de equipo de cómputo", "Revisión e implementación de infraestructura de red", "Participación en el desarrollo de proyectos", "Asesorías académicas y técnicas en áreas de cómputo", "Brindar soporte técnico"]
    },
    datos: {
      title: "Ciencia de datos (IIMAS)",
      items: ["Desarrollo de software", "Realizar análisis de datos", "Participación en el desarrollo de proyectos", "Asesorías académicas y técnicas en áreas de cómputo", "Generación de estadísticas y tendencias"]
    },
    info: {
      title: "Informática (FCA)",
      items: ["Mantenimiento preventivo y correctivo de equipo de cómputo", "Desarrollo de software", "Participación en el desarrollo de proyectos", "Asesorías académicas y técnicas en áreas de cómputo", "Brindar soporte técnico"]
    },
    tec_compu: {
      title: "Tec. Esp. en Computación (ENP)",
      items: ["Mantenimiento preventivo y correctivo de equipo de cómputo", "Revisión e implementación de infraestructura de red", "Participación en el desarrollo de proyectos", "Asesorías académicas y técnicas en áreas de cómputo", "Brindar soporte técnico"]
    },
    tec_desarrollo: {
      title: "Tec. Esp. en Sist. Comput. Desarrollo software (CCH)",
      items: ["Desarrollo de software", "Documentación de sistemas", "Desarrollo de pruebas automatizadas", "Realización de diagramas de bd", "Participación en el desarrollo de proyectos"]
    },

    tec_web: {
      title: "Tec. Esp. Sist. Comput. Diseño Aplicación Web BD (CCH)",
      items: ["Mantenimiento preventivo y correctivo de equipo de cómputo","Revisión e implementación de infraestructura de red","Desarrollo de software", "Participación en el desarrollo de proyectos", "Asesorías académicas y técnicas en áreas de cómputo"]
    }
  };

  document.querySelectorAll(".boton__carreras").forEach(boton__carreras => {
    boton__carreras.addEventListener("click", () => {
      const key = boton__carreras.dataset.info;
      const info__despegable = document.getElementById("servicioSocial__infoDespegable");
      

      document.getElementById("servicioSocial__infoDespegableTitulo").textContent = data[key].title;
      const list = document.getElementById("servicioSocial__lista");
      list.innerHTML = "";
      data[key].items.forEach(i => {
        const li = document.createElement("li");
        li.textContent = i;
        list.appendChild(li);
      });

      info__despegable.style.display = "flex";
    });
  });

  document.querySelector(".servicioSocial__infoDespegableClose").addEventListener("click", () => {
    document.getElementById("servicioSocial__infoDespegable").style.display = "none";
  });
})();

