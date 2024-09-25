USE `citas`;
DROP procedure IF EXISTS `actualizar_servicio`;
DELIMITER $$ 
CREATE PROCEDURE `actualizar_servicio`(
	id_servicio INT,
	nombre VARCHAR(256),
	precio DECIMAL(10,2),
	duracion INT,
	privado TINYINT,
	descripcion TEXT
) 
BEGIN
	-- Declarar variables para capturar el mensaje de error
    DECLARE v_errorMsg TEXT;

    -- Handler para manejar excepciones de SQL
    DECLARE EXIT HANDLER FOR SQLEXCEPTION 
    BEGIN
        -- Obtener los detalles del error
        GET DIAGNOSTICS CONDITION 1
            v_errorMsg =  MESSAGE_TEXT; -- Captura el mensaje del error

        -- Rollback en caso de error
        ROLLBACK;
        
        -- Lanzar un error con el mensaje capturado
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = v_errorMsg;
    END;
    
	-- Iniciar la transacción
	START TRANSACTION;
		-- Insertar en la tabla `servicios`
		UPDATE servicios SET nombre = nombre, 
									precio = precio, 
                                    duracion = duracion, 
                                    privado = privado,
                                    descripcion = descripcion,
                                    fecha_actualizacion = NOW()
                                    WHERE id = id_servicio;
	-- Confirmar la transacción
	COMMIT;
END $$