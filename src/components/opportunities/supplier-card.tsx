import React from 'react';
import { MapPin, CheckCircle, Clock, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { StatusBadge, SkillTag } from '@/components/ui/badges';
import { Button } from '@/components/ui/button';
import type { Supplier } from '@/types';

interface SupplierCardProps {
  supplier: Supplier;
  onViewDetail?: () => void;
  onRequestCollaboration?: () => void;
}

export function SupplierCard({ supplier, onViewDetail, onRequestCollaboration }: SupplierCardProps) {
  return (
    <Card hover>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <StatusBadge status={supplier.status} />
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                {supplier.category}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 text-base">{supplier.name}</h3>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin className="h-3.5 w-3.5 text-gray-400" />
              <span className="text-sm text-gray-500">{supplier.location}</span>
            </div>
            {supplier.status === 'verified' && (
              <div className="flex items-center gap-1.5 mt-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-xs text-emerald-600 font-medium">Terverifikasi Platform</span>
              </div>
            )}
          </div>
          <div className="text-center shrink-0">
            <div className="text-2xl font-bold text-emerald-700">{supplier.matchScore}%</div>
            <div className="text-xs text-gray-400">match</div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{supplier.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {supplier.products.slice(0, 3).map((product) => (
            <SkillTag key={product} skill={product} variant="outline" />
          ))}
          {supplier.products.length > 3 && (
            <span className="text-xs text-gray-400 flex items-center">+{supplier.products.length - 3}</span>
          )}
        </div>

        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {supplier.yearsActive} tahun aktif
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-amber-400" />
            Lokal
          </span>
        </div>

        <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
          {onViewDetail && (
            <Button size="sm" variant="outline" onClick={onViewDetail} className="flex-1">
              Detail
            </Button>
          )}
          {onRequestCollaboration && (
            <Button size="sm" onClick={onRequestCollaboration} className="flex-1">
              Hubungi
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
