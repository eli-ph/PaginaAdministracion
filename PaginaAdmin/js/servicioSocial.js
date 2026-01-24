(function(){
    const data = {
    electrica_comunicaciones: {
      title: "Ingeniería eléctrica electrónica y e ingeniería en telecomunicaciones",
      items: ["Mantenimiento Preventivo Y Correctivo De Equipo De Cómputo", "Revisión E Implementación De Infraestructura De Red", "Participación En El Desarrollo De Proyectos", "Asesorías Académicas Y Técnicas En áreas De Cómputo", "Brindar Soporte Técnico"]
    },
    compu: {
      title: "Ingeniería en computación (FI)",
      items: ["Mantenimiento Preventivo Y Correctivo De Equipo De Cómputo", "Revisión E Implementación De Infraestructura De Red", "Desarrollo De Software", "Participación En El Desarrollo De Proyectos", "Asesorías Académicas Y Técnicas En áreas De Cómputo"]
    },
    industrial: {
      title: "Ingeniería industrial (FI)",
      items: ["Soporte Mantenimiento Preventivo Y Correctivo De Equipo De Cómputo", "Asesorías Académicas Y Técnicas En áreas De Cómputo", "Descripción De Procesos", "Participación En El Desarrollo De Proyectos", "Documentación De Software"]
    },
    mecatronica: {
      title: "Ingeniería mecatrónica (FI)",
      items: ["Mantenimiento Preventivo Y Correctivo De Equipo De Cómputo", "Revisión E Implementación De Infraestructura De Red", "Participación En El Desarrollo De Proyectos", "Asesorías Académicas Y Técnicas En áreas De Cómputo", "Brindar Soporte Técnico"]
    },
    datos: {
      title: "Ciencia de datos (IIMAS)",
      items: ["Desarrollo De Software", "Realizar Análisis De Datos", "Participación En El Desarrollo De Proyectos", "Asesorías Académicas Y Técnicas En áreas De Cómputo", "Generación De Estadísticas Y Tendencias"]
    },
    info: {
      title: "Informática (FCA)",
      items: ["Mantenimiento Preventivo Y Correctivo De Equipo De Cómputo", "Desarrollo De Software", "Participación En El Desarrollo De Proyectos", "Asesorías Académicas Y Técnicas En áreas De Cómputo", "Brindar Soporte Técnico"]
    },
    tec_compu: {
      title: "Tec. Esp. en Computación (ENP)",
      items: ["Mantenimiento Preventivo Y Correctivo De Equipo De Cómputo", "Revisión E Implementación De Infraestructura De Red", "Participación En El Desarrollo De Proyectos", "Asesorías Académicas Y Técnicas En áreas De Cómputo", "Brindar Soporte Técnico"]
    },
    tec_desarrollo: {
      title: "Tec. Esp. en Sist. Comput. Desarrollo software (CCH)",
      items: ["Desarrollo De Software", "Documentación De Sistemas", "Desarrollo De Pruebas Automatizadas", "Realización De Diagramas De Bd", "Participación En El Desarrollo De Proyectos"]
    },

    tec_web: {
      title: "Tec. Esp. Sist. Comput. Diseño Aplicación Web BD (CCH)",
      items: ["Mantenimiento Preventivo Y Correctivo De Equipo De Cómputo","Revisión E Implementación De Infraestructura De Red","Desarrollo De Software", "Participación En El Desarrollo De Proyectos", "Asesorías Académicas Y Técnicas En áreas De Cómputo"]
    }
  };

  document.querySelectorAll(".boton__carreras").forEach(boton__carreras => {
    boton__carreras.addEventListener("click", () => {
      const key = boton__carreras.dataset.info;
      const info__despegable = document.getElementById("info__despegable");
      

      document.getElementById("infodespegable__titulo").textContent = data[key].title;
      const list = document.getElementById("infodespegable__list");
      list.innerHTML = "";
      data[key].items.forEach(i => {
        const li = document.createElement("li");
        li.textContent = i;
        list.appendChild(li);
      });

      info__despegable.style.display = "flex";
    });
  });

  document.querySelector(".infodespegable__close").addEventListener("click", () => {
    document.getElementById("info__despegable").style.display = "none";
  });
})();