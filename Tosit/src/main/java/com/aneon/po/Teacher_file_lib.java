package com.aneon.po;

public class Teacher_file_lib {
    private String filename;
    private String furl;
    private String Tnumber;
    private int Pnumber;
    private String detail;


    public String getFilename() {
        return filename;
    }

    public String getFurl() {
        return furl;
    }

    public String getTnumber() {
        return Tnumber;
    }

    public int getPnumber() {
        return Pnumber;
    }

    public String getDetail() {
        return detail;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public void setFurl(String furl) {
        this.furl = furl;
    }

    public void setTnumber(String tnumber) {
        Tnumber = tnumber;
    }

    public void setPnumber(int pnumber) {
        Pnumber = pnumber;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }
}
