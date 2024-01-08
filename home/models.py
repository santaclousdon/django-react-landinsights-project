from django.db import models
from basics.models import BaseModel

from user.models import User


class Company(BaseModel):
    name = models.CharField(max_length=1000, default='')
    
    owner = models.ForeignKey(User, null=False, on_delete=models.PROTECT, related_name='owned_companies')
    members = models.ManyToManyField(User, related_name='companies')

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }

class Region(BaseModel):
    type = models.CharField(max_length=1000, default='')
    gid = models.CharField(max_length=1000, default='')

    name = models.CharField(max_length=1000, default='')
    state = models.CharField(max_length=1000, default='')
    
    def to_json(self):
        stats = {}
        for stat in self.statistics.all():
            stats[stat.type] = stat.data

        return {
            'id': self.id,
            'gid': self.gid,
            'name': self.name,
            'state': self.state,
            **stats,
        }
    

class RegionStatistics(BaseModel):
    region = models.ForeignKey(Region, on_delete=models.CASCADE, related_name='statistics')

    type = models.CharField(max_length=1000, default='')

    data = models.JSONField(default={})

    def to_json(self):
        return {
            'type': self.type,
            'data': self.data,
        }

class SavedMarket(BaseModel):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='markets')

    region = models.ForeignKey(Region, null=True, on_delete=models.CASCADE, related_name='markets')

    status = models.CharField(max_length=1000, default='Backlog')

    def to_json(self):
        return {
            'id': self.id,
            'company': self.company.name,
            'region': self.region.to_json(),
            'notes': [note.to_json() for note in self.notes.order_by('created_at').all()],
            'status': self.status,
            'created_at': self.created_at.strftime('%m/%d/%Y')
        }


class SavedMarketNote(BaseModel):
    market = models.ForeignKey(SavedMarket, on_delete=models.CASCADE, related_name='notes')

    text = models.CharField(max_length=10000, default='')

    def to_json(self):
        return {
            'id': self.id,
            'text': self.text,
            'created_at': self.created_at.strftime('%m/%d/%Y')
        }


class SavedFilters(BaseModel):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='filters')

    name = models.CharField(max_length=1000, default='')
    
    data = models.JSONField(default={})
    
    def to_json(self):
        return {
            'id': self.id,
            'company': self.company.name,
            'name': self.name,
            'data': self.data,
        }
    
