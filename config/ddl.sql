--
-- PostgreSQL database dump
--

-- Dumped from database version 10.11
-- Dumped by pg_dump version 10.11

-- Started on 2020-01-25 17:45:12

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12924)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2857 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 203 (class 1259 OID 16484)
-- Name: comprador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comprador (
    empresa integer NOT NULL,
    leilao integer NOT NULL
);


ALTER TABLE public.comprador OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 16396)
-- Name: empresa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.empresa (
    id integer NOT NULL,
    "razaoSocial" character varying(64) NOT NULL,
    cnpj character varying(32) NOT NULL,
    logradouro character varying(64),
    municipio character varying(64),
    numero character varying(10),
    complemento character varying(64),
    bairro character varying(64),
    cep character varying(16),
    telefone character varying(32),
    email character varying(254) NOT NULL,
    site character varying(254),
    usuario character varying(20) NOT NULL,
    senha character varying(128),
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.empresa OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 16394)
-- Name: empresa_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.empresa_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.empresa_id_seq OWNER TO postgres;

--
-- TOC entry 2858 (class 0 OID 0)
-- Dependencies: 196
-- Name: empresa_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.empresa_id_seq OWNED BY public.empresa.id;


--
-- TOC entry 199 (class 1259 OID 16410)
-- Name: leilao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.leilao (
    id integer NOT NULL,
    codigo integer,
    descricao character varying(60) NOT NULL,
    vendedor integer NOT NULL,
    "inicioPrevisto" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.leilao OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 16408)
-- Name: leilao_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.leilao_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.leilao_id_seq OWNER TO postgres;

--
-- TOC entry 2859 (class 0 OID 0)
-- Dependencies: 198
-- Name: leilao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.leilao_id_seq OWNED BY public.leilao.id;


--
-- TOC entry 201 (class 1259 OID 16418)
-- Name: lote; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lote (
    id integer NOT NULL,
    "numeroLote" integer,
    descricao character varying(60) NOT NULL,
    quantidade numeric NOT NULL,
    "valorInicial" numeric,
    unidade character varying(128) NOT NULL,
    leilao integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.lote OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16416)
-- Name: lote_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lote_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lote_id_seq OWNER TO postgres;

--
-- TOC entry 2860 (class 0 OID 0)
-- Dependencies: 200
-- Name: lote_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lote_id_seq OWNED BY public.lote.id;


--
-- TOC entry 202 (class 1259 OID 16467)
-- Name: unidade; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.unidade (
    id integer DEFAULT nextval('public.empresa_id_seq'::regclass) NOT NULL,
    nome character varying(128) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.unidade OWNER TO postgres;

--
-- TOC entry 2692 (class 2604 OID 16399)
-- Name: empresa id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empresa ALTER COLUMN id SET DEFAULT nextval('public.empresa_id_seq'::regclass);


--
-- TOC entry 2695 (class 2604 OID 16413)
-- Name: leilao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leilao ALTER COLUMN id SET DEFAULT nextval('public.leilao_id_seq'::regclass);


--
-- TOC entry 2699 (class 2604 OID 16421)
-- Name: lote id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lote ALTER COLUMN id SET DEFAULT nextval('public.lote_id_seq'::regclass);



ALTER TABLE ONLY public.comprador
    ADD CONSTRAINT comprador_pk PRIMARY KEY (empresa, leilao);


--
-- TOC entry 2692 (class 2606 OID 24991)
-- Name: empresa empresa_cnpj_uk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empresa
    ADD CONSTRAINT empresa_cnpj_uk UNIQUE (cnpj);


--
-- TOC entry 2697 (class 2606 OID 24993)
-- Name: empresa empresa_usuario_uk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empresa
    ADD CONSTRAINT empresa_usuario_uk UNIQUE (usuario);


--
-- TOC entry 2707 (class 2606 OID 16401)
-- Name: empresa empresa_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empresa
    ADD CONSTRAINT empresa_pk PRIMARY KEY (id);


--
-- TOC entry 2710 (class 2606 OID 16415)
-- Name: leilao leilao_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leilao
    ADD CONSTRAINT leilao_pk PRIMARY KEY (id);


--
-- TOC entry 2712 (class 2606 OID 16423)
-- Name: lote lote_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lote
    ADD CONSTRAINT lote_pk PRIMARY KEY (id);


--
-- TOC entry 2714 (class 2606 OID 16471)
-- Name: unidade unidade_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidade
    ADD CONSTRAINT unidade_pk PRIMARY KEY (id);


--
-- TOC entry 2705 (class 1259 OID 16406)
-- Name: empresa_cnpj_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX empresa_cnpj_idx ON public.empresa USING btree (cnpj);


--
-- TOC entry 2708 (class 1259 OID 16407)
-- Name: empresa_usuario_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX empresa_usuario_idx ON public.empresa USING btree (usuario);


--
-- TOC entry 2719 (class 2606 OID 16489)
-- Name: comprador empresa_comp_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comprador
    ADD CONSTRAINT empresa_comp_fk FOREIGN KEY (empresa) REFERENCES public.empresa(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 2720 (class 2606 OID 16494)
-- Name: comprador leilao_comp_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comprador
    ADD CONSTRAINT leilao_comp_fk FOREIGN KEY (leilao) REFERENCES public.leilao(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 2718 (class 2606 OID 16456)
-- Name: lote leilao_lote_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lote
    ADD CONSTRAINT leilao_lote_fk FOREIGN KEY (leilao) REFERENCES public.leilao(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


--
-- TOC entry 2717 (class 2606 OID 24576)
-- Name: leilao vendedor_leilao; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leilao
    ADD CONSTRAINT vendedor_leilao FOREIGN KEY (vendedor) REFERENCES public.empresa(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


-- Completed on 2020-01-25 17:45:15

--
-- PostgreSQL database dump complete
--

-- INSERTS

--empresa

INSERT INTO public.empresa ("razaoSocial", cnpj, logradouro, municipio, numero, complemento, bairro, cep, telefone, email, site, usuario, senha) VALUES
('A Empresa 01','111111111111','Rua do Bolsinho','Condado','3','Bolsão','Vila dos Hobbits','78550000','066999999999','empresa01@email.com','empresa01.com','empresa01','empresa01'),
('A Empresa 02','222222222222','Rua onde o vento faz a curva','Terra Média','6174','Reino de Gondor','Minas Tirith','78550000','066999999999','empresa02@email.com','empresa02.com','empresa02','empresa02'),
('A Empresa 03','333333333333','Rua onde o vento faz a curva','Terra Média','6174','Valfenda','Rivendell','78550000','066999999999','empresa03@email.com','empresa03.com','empresa03','empresa03'),
('A Empresa 04','444444444444','Rua onde o vento faz a curva','Terra Média','6174','Senhores dos Cavalos','Rohan','78550000','066999999999','empresa04@email.com','empresa04.com','empresa04','empresa04'),
('A Empresa 05','555555555555','Rua onde o vento faz a curva','Terra Média','6174','Montanha da Perdição','Mordor','78550000','066999999999','empresa05@email.com','empresa05.com','empresa05','empresa05'),
('A Empresa 06','666666666666','Rua onde o vento faz a curva','Terra Média','6174','','Floresta das Trevas','78550000','066999999999','empresa06@email.com','empresa06.com','empresa06','empresa06'),
('A Empresa 07','777777777777','Rua onde o vento faz a curva','Terra Média','6174','Onde mora Beorn','Vales do Anduin','78550000','066999999999','empresa07@email.com','empresa07.com','empresa07','empresa07'),
('A Empresa 08','888888888888','Rua onde o vento faz a curva','Terra Média','6174','','Gondor','78550000','066999999999','empresa08@email.com','empresa08.com','empresa08','empresa08'),
('A Empresa 09','999999999999','Rua onde o vento faz a curva','Terra Média','6174','','Angmar','78550000','066999999999','empresa09@email.com','empresa09.com','empresa09','empresa09'),
('A Empresa 10','000000000000','Rua onde o vento faz a curva','Terra Média','6174','Ponei Saltitante','Bri','78550000','066999999999','empresa10@email.com','empresa10.com','empresa10','empresa10');

--leilao

INSERT INTO public.leilao (codigo, descricao, vendedor, "inicioPrevisto") VALUES
(10001,'Leilão da empresa 01',1,'2020-01-01 00:00:00.000000'),
(10002,'Leilão da empresa 02',2,'2020-01-02 00:00:00.000000'),
(10003,'Leilão da empresa 03',3,'2020-01-03 00:00:00.000000'),
(10004,'Leilão da empresa 04',4,'2020-01-04 00:00:00.000000'),
(10005,'Leilão da empresa 05',5,'2020-01-05 00:00:00.000000'),
(10006,'Leilão da empresa 06',6,'2020-01-06 00:00:00.000000'),
(10007,'Leilão da empresa 07',7,'2020-01-07 00:00:00.000000'),
(10008,'Leilão da empresa 08',8,'2020-01-08 00:00:00.000000'),
(10009,'Leilão da empresa 09',9,'2020-01-09 00:00:00.000000'),
(10010,'Leilão da empresa 10',10,'2020-01-10 00:00:00.000000');

-- unidade

INSERT INTO public.unidade (nome) VALUES
('unidade'),
('metro'),
('kilograma'),
('tonelada');

-- lote

INSERT INTO public.lote ("numeroLote", descricao, quantidade, "valorInicial", unidade, leilao) VALUES
(1,'Lote de ouro coletado da Montanha Solitária',1000,100000.00,4,1),
(1,'O Um Anel',1,10000000.00,1,2),
(1,'Espada Ferroada',1,10000.00,1,3),
(1,'Malha de Mithril',1,10000.00,1,3),
(2,'Lembas',10,10.00,3,3),
(1,'Mobilha',1,1000.00,1,4),
(2,'Ponei',1,100.00,1,4),
(2,'Carroça',1,100.00,1,4),
(3,'Poção de cura',1,100.00,1,4),
(4,'Casa na vila dos Hobbits',1,10000.00,1,4),
(1,'Espda Anduril',1,10000.00,1,5),
(1,'Arco Élfico',1,10000.00,1,6),
(1,'Machado de Batalha',1,10000.00,1,7),
(1,'Armadura Élfica',1,100000.00,1,8),
(1,'Armadura Anão',1,10000.00,1,9),
(1,'Espada curta',1,1000.00,1,10);

--comprador

INSERT INTO public.comprador (empresa, leilao) VALUES
(10,1),
(9,2),
(8,3),
(7,4),
(6,5),
(5,6),
(4,7),
(3,8),
(2,9),
(1,10);
